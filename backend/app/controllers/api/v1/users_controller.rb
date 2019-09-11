class Api::V1::UsersController < ApplicationController
  before_action :find_user, only: [:show, :update, :destroy]

  def index
    users = User.all
    render json: users, status: 200
  end

  def show
    render json: @user, status: 200
  end

  def create
    user = User.create(user_params)
    render json: user, status: 201
  end

  def update
    @user.update(user_params)
    render json: @user, status: 200
  end

  def destroy
    userId = @user.id
    @user.destroy
    render json: { message: "Zap! user deleted", userId: userId }
  end

  private

  def find_user
    @user = User.find(params[:id])
  end

  def user_params
    params.permit(:name)
  end
end
