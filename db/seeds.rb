# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do |trip|
  name = Faker::Address.state
  Trip.create(name: name)
end

10.times do |i|
  10.times do |stop|
    name = Faker::Address.community
    Stop.create(name: name, trip_id: i+1)
  end
end

100.times do |i|
  city = "#{Faker::Address.city_prefix} #{Faker::Address.city_suffix}"
  state = Faker::Address.state
  zip = Faker::Address.zip
  street = Faker::Address.street_address
  stop_id = i+1
  Address.create(city: city, state: state, zip: zip, street: street, stop_id: stop_id)
end