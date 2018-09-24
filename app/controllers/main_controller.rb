class MainController < ApplicationController
  layout 'maintemp'

  public
    def index
    end
    def create
      @comment = Order.new(comment_params)
      if @comment.valid?
          @comment.save
          OrderMailer.with(data: @comment).quwery_email.deliver_now
          redirect_to index_path and return
      else
          render 'index' and return
      end
    end

  private
    def comment_params
      params.require(:index).permit(:fio, :email, :phone, :company, :comment, :commit)
    end
end
