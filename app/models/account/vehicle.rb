class Account::Vehicle < ApplicationRecord
  include Accountable

  validates :make, presence: true
  validates :model, presence: true
  validates :year, numericality: {
    only_integer: true,
    greater_than_or_equal_to: 1942
  }
end
