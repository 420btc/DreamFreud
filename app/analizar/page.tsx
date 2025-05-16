import AnalizarUltimoSueno from "@/components/analizar-ultimo-sueno"

export default function AnalizarPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // Pasar el id como prop al componente cliente
  return <AnalizarUltimoSueno suenoId={searchParams.id as string} />
}
