class OrderMailer < ApplicationMailer
  default to: 'dbnfkbq222@gmail.com',
          from: 'SUPD@send.ru'

  def quwery_email
    @data = params[:data]
    mail(subject: "Новый запрос")
  end
end
