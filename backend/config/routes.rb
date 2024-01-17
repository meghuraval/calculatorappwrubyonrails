Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  get '/add/:a/:b', to: 'application#add'
  get '/subtract/:a/:b', to: 'application#subtract'
  get '/multiply/:a/:b', to: 'application#multiply'
  get '/divide/:a/:b', to: 'application#divide'
  get '/clear', to: 'application#clear'
  get '/parenthesis', to: 'application#parenthesis'
  get '/sin/:a', to: 'application#sin'
  get '/cos/:a', to: 'application#cos'
  get '/tan/:a', to: 'application#tan'
  get '/pi', to: 'application#pi'
  get '/exponent/:a/:b', to: 'application#exponent'
  post '/equals', to: 'application#equals'
  post '/calculate', to: 'application#calculate' # http://localhost:3000/calculate
end
