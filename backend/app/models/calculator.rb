# app/models/calculator.rb
class Calculator
    def self.evaluate(expression)
      begin
        result = eval(expression)
        # Make sure to handle the result appropriately
        result.to_s
      rescue StandardError => e
        raise Calculator::Error, "Error evaluating expression: #{e.message}"
      end
    end
  
    class Error < StandardError; end
  end
  