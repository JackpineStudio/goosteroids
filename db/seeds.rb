# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Session seeds

sessions = Session.create([{ session_id: 'ZpOoftRxntBdUvoWvkpK87KIGKuPV3O56byG0cihKHWvnH1zUcSUaZtpbMTma',last_active: DateTime.now },
						   { session_id: 'bQJTV5ETVw4cA7y1UJeDVe201Y5SviRKBUtGJLgi66HkZnYhvFqkWhpFgsUoaT', last_active: DateTime.now }])

