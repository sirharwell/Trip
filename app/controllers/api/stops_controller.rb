class Api::StopsController < ApplicationController
  before_action :set_trip, only: [:index]

  def index
    render json: Stop.where(trip_id: @trip.id)
  end 

  def create 
    stop = Stop.new(trip_params)
    if stop.save
      render json: trip 
    else 
      render json: { errors: trip.errors}, status: unprocessable_entity
    end
  end 

  def update 
    stop = Stop.find(params[:id])
    stop.update(name: params[:name])
    render json: trip 
  end  

  def destroy 
    Stop.find(params[:id]).destroy
    render json: {message: 'Stop Delete'}
  end

  private
  
  def set_trip
    @trip = Trip.find(params[:trip_id])
  end

  def stop_params 
    params.require(:trip).permit(:name, :complete)
  end 
end 
end
