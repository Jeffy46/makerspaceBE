SELECT
  event_id,
  title,
  event_time,
  event_poster_path,
  event_link,
  (event_time < CURRENT_TIMESTAMP) AS has_occurred
FROM
  events_data;