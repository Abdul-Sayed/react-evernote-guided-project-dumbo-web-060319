
User.destroy_all
# u = User.create(name: ENV['USER'])

Note.destroy_all

1.times do
  Note.create(user: User.create(name: Faker::Name.name), title: Faker::Lorem.sentence(rand(4) + 1, true), body: Faker::Lorem.paragraphs(3, true).join('\n'))
end
