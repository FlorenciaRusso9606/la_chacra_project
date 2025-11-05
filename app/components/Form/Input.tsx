import React from "react"
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label: string;
    placeholder?: string;
    className?: string;
    error?: string
}
export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ label, placeholder, className, error, ...props }, ref) => {
   return(
    <div className="flex flex-col space-y-2">
        <label className="text-sm font-bold text-[#1A3310]">{label}</label>
       <input
   className={`p-3 border-2 rounded-xl border-[#CBE8CB] 
              focus:outline-none focus:ring-2 focus:ring-[#AEE4EA] 
              focus:border-[#9bcb88] text-md bg-white/90 
              transition-all duration-200 font-medium text-[#2A2D34]`}
  placeholder={placeholder}
  {...props}
  ref={ref}
/>
        
        {error && <span className="text-red-600 text-xs mt-1 font-medium">{error}</span>}
    </div>
   )
})