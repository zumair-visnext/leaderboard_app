class CreateLeaderboards < ActiveRecord::Migration[8.0]
  def change
    create_table :leaderboards do |t|
      t.integer :rank
      t.string :name
      t.integer :xps
      t.string :twitter
      t.string :discord

      t.timestamps
    end
  end
end
