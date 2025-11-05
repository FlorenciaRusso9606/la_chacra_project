import React from "react"
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{
    label: string
    className?: string;
    error?:string
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({label, className, error, ...props}, ref) =>{
    return(
        <div className="flex flex-col space-y-2">
            <label className="text-sm font-bold text-[#1A3310]">{label}</label>
           <textarea
  ref={ref}
  {...props}
   className={`border-2 rounded-xl border-[#CBE8CB] 
              focus:outline-none focus:ring-2 focus:ring-[#AEE4EA] 
              focus:border-[#7BB661] text-md p-3 bg-white/90 
              transition-all duration-200 min-h-[120px] resize-vertical 
              font-medium text-[#2A2D34]`}
/>

            {error && <span className="font-xs text-red-600 mt-1 font-medium">{error}</span>}
        </div>
    )
})