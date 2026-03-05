import { Check } from "lucide-react"
import Button from "./Button"

interface PriceModelProps {
  title: string
  computerLimit: string
  pricePerYear: string
}

const PriceModel = ({ title, computerLimit, pricePerYear }: PriceModelProps) => {
  const encodedTitle = title.split(" ").join("%20");

  return (
    <li className="w-full">
      <article className="rounded-md text-center border-2 border-[#F1F4FF] px-8 py-4 xl:px-12 xl:py-6">
        <h2 className="text-lg font-medium">{title}</h2>
        <p className="py-5 font-medium text-primary text-3xl">{pricePerYear} €</p>
        <p>für ein Jahr *</p>
        <p className="mt-6">Für Schulen mit</p>
        <p className="font-bold">{computerLimit}</p>
        <p className="mt-6">Voller Funktionsumfang mit</p>
        <ul className="list-none flex w-fit mx-auto flex-col gap-1.5">
          {["1 Jahr Gültigkeit *", "1 Jahr Updates *", "1 Jahr Support *"].map((point, idx) => <li key={`${title}-${idx}`} className="flex gap-2 items-center"><Check height="20" className="shrink-0 text-primary" />{point}</li>)}
        </ul>
        <div className="w-fit mx-auto mt-6">
          <Button label="Anfragen" onPress={`mailto:office@classinsights.at?subject=Anfrage%20${encodedTitle}`} arrowed />
        </div>
      </article>
    </li>
  )
}

export default PriceModel;
