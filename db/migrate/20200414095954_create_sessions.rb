class CreateSessions < ActiveRecord::Migration[6.0]
  def change
    create_table :sessions do |t|
      t.string :name
      t.text :notes
      t.integer :user_id, index: true

      t.timestamps
    end
  end
end
