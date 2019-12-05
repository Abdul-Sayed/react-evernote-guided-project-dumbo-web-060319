class NoteSerializer < ActiveModel::Serializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title, :body, :updated_at
  has_one :user
end
