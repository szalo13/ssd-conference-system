class AddUserTypeToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :userType, :string
  end
end
