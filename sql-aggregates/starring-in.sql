select "genres"."name" as "Genre Name",
count("genres"."name") as "Genre Total"
from "actors"
join "castMembers" using ("actorId")
join "films" using ("filmId")
join "filmGenre" using ("filmId")
join "genres" using ("genreId")
where "actors"."firstName" = 'Lisa' and "actors"."lastName" = 'Monroe'
group by "genres"."name";
