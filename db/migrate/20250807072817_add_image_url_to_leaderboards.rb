class AddImageUrlToLeaderboards < ActiveRecord::Migration[8.0]
  def change
    add_column :leaderboards, :image_url, :string
  end
end
