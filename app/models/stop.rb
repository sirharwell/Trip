class Stop < ApplicationRecord
  belongs_to :trip
  has_one :address
end
