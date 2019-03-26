ActionMailer::Base.delivery_method = :smtp
ActionMailer::Base.raise_delivery_errors = true
ActionMailer::Base.smtp_settings = {
    address:              'smtp.gmail.com',
    port:                 587,
    domain:               'supd.com',
    user_name:            'dbnfkbq222',
    password:             '',
    authentication:       'plain',
    enable_starttls_auto: true
}
