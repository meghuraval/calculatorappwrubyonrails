class ApplicationController < ActionController::Base
    protect_from_forgery with: :null_session
  
    def add
      result = params[:a].to_f + params[:b].to_f
      render plain: result.to_s
    end
  
    # ... (other actions)
  
    def calculate
      if request.content_type == 'application/json'
        begin
          json_params = JSON.parse(request.body.read)
          expression = json_params['expression']
        rescue JSON::ParserError => e
          Rails.logger.error("JSON parsing error: #{e.message}")
          render plain: "Error: Invalid JSON", status: :bad_request
          return
        end
      else
        expression = params[:expression]
      end
   
      begin
        result = Calculator.evaluate(expression)
        render plain: result.to_s
      rescue Calculator::Error => e
        Rails.logger.error("Calculator error: #{e.message}")
        render plain: "Error: #{e.message}", status: :bad_request
      end
    end
  end
  