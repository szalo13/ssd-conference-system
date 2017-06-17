json.extract! conference, :id, :name, :description, :startTime, :endTime, :isPrivate, :created_at, :updated_at
json.url conference_url(conference, format: :json)
