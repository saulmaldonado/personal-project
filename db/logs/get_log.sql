SELECT l.*, s.student_first_name, s.student_last_name FROM logs l 
INNER JOIN students s ON l.student_id = s.student_id
WHERE l.log_id = $1