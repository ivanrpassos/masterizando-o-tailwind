import { LogOut } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../Buttons'

export const Profile = () => {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <Image
        src="https://github.com/ivanrpassos.png"
        className="h-10 w-10 rounded-full"
        alt=""
        height={40}
        width={40}
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Ivan Passos</span>
        <span className="truncate text-sm text-zinc-500">
          ivanp@digisource.com.br
        </span>
      </div>
      <Button variant="ghost" type="button">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
