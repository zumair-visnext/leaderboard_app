class Leaderboard < ApplicationRecord
  validates :rank, presence: true, numericality: { only_integer: true, greater_than: 0 }
  validates :name, presence: true
  validates :xps, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0 }

  scope :by_rank, -> { order(rank: :asc) }
  scope :search_by_name, ->(query) { where("LOWER(name) LIKE LOWER(?)", "%#{query}%") if query.present? }
end
