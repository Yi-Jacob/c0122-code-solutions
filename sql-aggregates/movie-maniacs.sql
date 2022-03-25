select "customers"."firstName" as "Firstname",
"customers"."lastName" as "Lastname",
sum("payments"."amount") as "Total amount spent"
from "customers"
join "payments" using ("customerId")
group by "customers"."firstName", "customers"."lastName"
order by "Total amount spent" desc
