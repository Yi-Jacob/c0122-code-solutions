select count("cities") as "Number of Cities",
"countries"."name" as "Name of Country"
from "cities"
join "countries" using ("countryId")
group by "countries"."countryId"
