import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface AnimeCardProps {
  title: string
  image: string
  genres?: string[]
  rating?: number
  year?: number
  slug: string
}

export function AnimeCard({ title, image, genres = [], rating, year, slug }: AnimeCardProps) {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[2/3] overflow-hidden">
        <Image
          src={image || "/placeholder.avif"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {year && <Badge className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm">{year}</Badge>}
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg line-clamp-1">{title}</h3>
        {genres.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {genres.slice(0, 2).map((genre) => (
              <Badge key={genre} variant="secondary" className="text-xs">
                {genre}
              </Badge>
            ))}
            {genres.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{genres.length - 2}
              </Badge>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        {rating && (
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
        )}
        <Link href={`/anime/${slug}`} className="text-sm text-primary hover:underline">
          View Details
        </Link>
      </CardFooter>
    </Card>
  )
}

