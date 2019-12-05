class UserSerializer < ActiveModel::Serializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :username, :password_digest
  has_many :notes
end
