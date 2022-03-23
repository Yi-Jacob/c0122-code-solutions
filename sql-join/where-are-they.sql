select "addresses"."line1",
"cities"."name" as "cities",
"addresses"."district",
"countries"."name" as "countries"
from "cities"
join "addresses" using ("cityId")
join "countries" using ("countryId");
