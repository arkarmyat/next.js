import React from 'react'
import Image from 'next/image'

export default function Page() {
  return (
    <div>
      <div style={{ width: 200, height: 200, position: 'fixed' }}>
        <Image
          placeholder="blur"
          sizes="20vw"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAB+APUDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAAECAwUGBP/EABsQAQEBAQEBAQEAAAAAAAAAAAABEQISAzFR/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwDogBkBgADAAGAABgARgCAAERkBFTKgVTVVNAiOkBEaQBAAQBAZAkDBAH3BQUIGAIwYEYAAGAIGAIjAJBkCSqk0CqaqpoFSp1NAqVFKgE6LStA9LS0tA9Gp0tBehGgHVBhQgYAjAAAAADIAAAIAARGQFU06VAqmnU1Aqmnam0CqbTtRaB2ptK1NoHaVqbU2gvS1Gl6BpoZ+gDuggoYIAYIAYBAYLRoGC0tAyGloAqNTaAtK0WptAWptFqLQO1FotRagdqLRai0Bam0rUWgq1N6TekXpRd6L0i9J9A09Bn6APR6NTo0Faeo0aC9Go0aovRqNGgvS1OjQVpanRoK0tTpWgdpWptK0DtTaV6RekFWotK9IvQKtReivSL0B3pF6K9IvQHekXor0i9Aq1F6Tek3oF3pPpF6L0DT0GXoKPTeh6Zeh6Br6Gs/Q9A10az9D0DTRrPT0F6NRpaC9Go0tBdqbU2pvQKvRXpF6TegVek3pF6RegXekXpF6RegXekXpF7RewXek3pne0XsGl6RekXpN6Bd6TekXotBVpanS0F6EaAei9H6Zeh6Br6P0y9DQa+j9MtPQa6NZ6egvRqNGgrStTpWgq1N6Tam0FXpF6Tai9Aq9IvSb0z66UVekXtHXTPrsF3tF7Zdds+uzBte0Xtjfoi/RcG97L0w9n7MG3otZzpUqCtGloBQIA7mnqQC9GpMFaepMFaepNA9GkAPU2gqAtRadTQTai06jpRPVZddL6ZdAjrpl10rpj3VE9dse/qPpWDciKv0tL1f6kAr1V89sjn6D6JVysuWnLFVpDTFIAAA//9k="
          src="/next.avif"
          alt="apple"
          fill
          aria-label="aria-label"
          priority
        />
      </div>
    </div>
  )
}
