class Api::StopsController < ApplicationController
  before_action :set_trip, only: [:index]

  def index
    render json: Stop.where(trip_id: @trip.id)
  end 

  def create
    stop = Stop.new(stop_params)
    if stop.save
      render json: stop 
    else 
      render json: { errors: stop.errors}, status: 422
    end
  end 

  def update 
    stop = Stop.find(params[:id])
    stop.update(name: params[:name])
    render json: stop 
  end  

  def destroy 
    Stop.find(params[:id]).destroy
    render json: {message: 'Stop Delete'}
  end

  private

  def set_trip
    @trip = Trip.find(params[:id])
  end

  def stop_params 
    params.require(:stop).permit(:name, :trip_id)
  end 
end
