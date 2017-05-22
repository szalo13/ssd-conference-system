# all domains to contact our server, expose some custom headers retuned by Devise Token Auth, and allow the most commonly used http request methods, although we won’t need all of them.

Rails.application.config.middleware.use Rack::Cors do
  allow do
    origins '*'
    resource '*',
    :headers => :any,
    :expose  => ['access-token', 'expiry', 'token-type', 'uid', 'client'],
    :methods => [:get, :post, :options, :delete, :put]
  end
end
