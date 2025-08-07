require 'csv'

# Clear existing data
Leaderboard.destroy_all

# Read CSV file and skip the first empty line
csv_file = Rails.root.join('leaderboard_data.csv')
content = File.read(csv_file)
lines = content.lines.reject { |line| line.strip.empty? }
csv_data = CSV.parse(lines.join, headers: true)

puts "Importing #{csv_data.count} leaderboard records..."

csv_data.each_with_index do |row, index|
  leaderboard = Leaderboard.create!(
    rank: row['Rank'].to_i,
    name: row['Name'].strip,
    xps: row['XPs'].to_i,
    twitter: row['Twitter'].strip,
    discord: row['Discord'].strip,
    image_url: row['Image'].strip
  )
  
  print "." if leaderboard.id % 10 == 0
end

puts "\nImport completed! #{Leaderboard.count} records imported."
