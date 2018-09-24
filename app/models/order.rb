class Order < ApplicationRecord
  validates :fio, length: { minimum: 3 }
  validates :phone, numericality: { only_integer: true }
  validates :fio, :email, :phone, :company, presence: true
end