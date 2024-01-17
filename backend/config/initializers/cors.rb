Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins 'https://web.postman.co'  # Add the correct origin of your Postman request
      resource '*', headers: :any, methods: [:get, :post, :options]
    end
  end