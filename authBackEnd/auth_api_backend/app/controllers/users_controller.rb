class UsersController < ApplicationController

  def profile
    render json: current_user
  end

  def create
    user = User.new(user_params)
    if user.valid?
      (render json: { token: create_token(user.id) }, user, include: [:username], status: 201) if user.save
    else
      render json: { errors: user.errors.full_messages }, status: 422
    end
  end

  private

  def user_params
    params.permit(:username, :password)
  end

end
