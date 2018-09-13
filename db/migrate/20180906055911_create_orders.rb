class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.string :fio
      t.integer :phone
      t.string :email
      t.string :company
      t.text :comment

      t.timestamps
    end
  end
end
