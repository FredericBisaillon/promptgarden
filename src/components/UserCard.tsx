import { User } from "@/data/mock-users"

interface UserCardProps {
  user: User
}

export function UserCard({ user }: UserCardProps) {
  return (
    <div className="w-full flex flex-col items-center gap-4 p-4">
      <div className="flex flex-col items-center gap-4">
        <img 
          src={user.avatar} 
          alt={`${user.name}'s avatar`}
          className="w-32 h-32 rounded-full object-cover"
        />
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-center text-[#121417] text-[22px] font-bold leading-7">
              {user.name}
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-center text-[#6B7582] text-base font-normal leading-6">
              Joined in {user.joinedYear}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 