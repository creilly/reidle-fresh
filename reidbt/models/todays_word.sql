select
    upper(word) as word,
    upper(answer) as answer
from
    {{ ref('daily_words') }}
where
    day = current_date
limit 1
