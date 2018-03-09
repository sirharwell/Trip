class Api::AddressesController < ApplicationController
  before_action :set_stop, only: [:index]

  def index
    render json: Address.where(stop_id: @stop.id)
  end 

  def create
    address = Address.new(address_params)
    if address.save
      render json: address 
    else 
      render json: { errors: address.errors}, status: 422
    end
  end 

  def update 
    address = Address.find(params[:id])
    address.update(name: params[:name])
    render json: stop 
  end  

  def destroy 
    Address.find(params[:id]).destroy
    render json: {message: 'Address Delete'}
  end

  private

  def set_stop
    @stop = Stop.find(params[:id])
  end

  def stop_params 
    params.require(:stop).permit(:name, :stop_id)
  end 
end