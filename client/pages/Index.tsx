export default function Index() {
  const LoadingIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M8.95576 2.06759C9.29775 2.02298 9.64631 2 10 2C10.3537 2 10.7023 2.02298 11.0442 2.06759L10.9149 3.05919C10.6157 3.02016 10.3103 3 10 3C9.68968 3 9.38432 3.02016 9.0851 3.05919L8.95576 2.06759ZM5.12946 3.65304C5.67979 3.23013 6.28691 2.87706 6.93756 2.60724L7.32062 3.53097C6.75181 3.76684 6.22062 4.07569 5.73878 4.44596L5.12946 3.65304ZM13.0624 2.60724C13.7131 2.87706 14.3202 3.23013 14.8705 3.65304L14.2612 4.44596C13.7794 4.07569 13.2482 3.76684 12.6794 3.53097L13.0624 2.60724ZM16.347 5.12946C16.7699 5.67979 17.1229 6.28691 17.3928 6.93756L16.469 7.32062C16.2332 6.75181 15.9243 6.22062 15.554 5.73878L16.347 5.12946ZM2.60724 6.93756C2.87706 6.28691 3.23013 5.67979 3.65304 5.12946L4.44596 5.73878C4.07569 6.22062 3.76684 6.75181 3.53097 7.32062L2.60724 6.93756ZM2 10C2 9.64631 2.02298 9.29775 2.06759 8.95576L3.05919 9.0851C3.02016 9.38432 3 9.68968 3 10C3 10.3103 3.02016 10.6157 3.05919 10.9149L2.06759 11.0442C2.02298 10.7023 2 10.3537 2 10ZM17.9324 8.95576C17.977 9.29775 18 9.64631 18 10C18 10.3537 17.977 10.7023 17.9324 11.0442L16.9408 10.9149C16.9798 10.6157 17 10.3103 17 10C17 9.68968 16.9798 9.38432 16.9408 9.0851L17.9324 8.95576ZM3.65304 14.8705C3.23013 14.3202 2.87706 13.7131 2.60724 13.0624L3.53097 12.6794C3.76684 13.2482 4.07569 13.7794 4.44596 14.2612L3.65304 14.8705ZM17.3928 13.0624C17.1229 13.7131 16.7699 14.3202 16.347 14.8705L15.554 14.2612C15.9243 13.7794 16.2332 13.2482 16.469 12.6794L17.3928 13.0624ZM6.93756 17.3928C6.28691 17.1229 5.67979 16.7699 5.12946 16.347L5.73878 15.554C6.22062 15.9243 6.75181 16.2332 7.32062 16.469L6.93756 17.3928ZM14.8705 16.347C14.3202 16.7699 13.7131 17.1229 13.0624 17.3928L12.6794 16.469C13.2482 16.2332 13.7794 15.9243 14.2612 15.554L14.8705 16.347ZM10 18C9.64631 18 9.29775 17.977 8.95576 17.9324L9.0851 16.9408C9.38432 16.9798 9.68968 17 10 17C10.3103 17 10.6157 16.9798 10.9149 16.9408L11.0442 17.9324C10.7023 17.977 10.3537 18 10 18Z" fill="currentColor"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-white px-6 sm:px-12 lg:px-20 py-12">
      <div className="max-w-[900px] mx-auto">
        {/* Button Grid - Two columns */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12">
          
          {/* Column 1 */}
          <div className="space-y-6">
            {/* Primary buttons - Default State */}
            <div className="space-y-3">
              <button className="flex items-center justify-center gap-1.5 px-4 py-2 bg-btn-primary text-white text-sm font-normal leading-[18px] rounded hover:bg-btn-primary-hover transition-colors">
                Button
              </button>
              <button className="flex items-center justify-center gap-1.5 px-4 py-2 bg-btn-primary text-white text-sm font-normal leading-[18px] rounded hover:bg-btn-primary-hover transition-colors">
                <LoadingIcon />
                Button
              </button>
              <button className="flex items-center justify-center gap-1.5 px-4 py-2 bg-btn-primary text-white text-sm font-normal leading-[18px] rounded hover:bg-btn-primary-hover transition-colors" disabled>
                Button
              </button>
            </div>

            {/* Secondary buttons */}
            <div className="space-y-3">
              <button className="flex items-center justify-center gap-1.5 px-4 py-2 bg-transparent text-[#386CFF] text-sm font-normal leading-[18px] rounded hover:text-[#143EFF] transition-colors">
                Button
              </button>
              <button className="flex items-center justify-center gap-1.5 px-4 py-2 bg-transparent text-[#386CFF] text-sm font-normal leading-[18px] rounded hover:text-[#143EFF] transition-colors">
                <LoadingIcon />
                Button
              </button>
              <button className="flex items-center justify-center gap-1.5 px-4 py-2 bg-transparent text-btn-text-disabled text-sm font-normal leading-[18px] rounded" disabled>
                Button
              </button>
            </div>

            {/* Outline buttons */}
            <div className="space-y-3">
              <button className="flex items-center justify-center gap-1.5 px-4 py-2 bg-transparent border border-[#386CFF] text-[#386CFF] text-sm font-normal leading-[18px] rounded hover:bg-[#386CFF] hover:bg-opacity-5 transition-colors">
                Button
              </button>
              <button className="flex items-center justify-center gap-1.5 px-4 py-2 bg-transparent border border-[#386CFF] text-[#386CFF] text-sm font-normal leading-[18px] rounded hover:bg-[#386CFF] hover:bg-opacity-5 transition-colors">
                <LoadingIcon />
                Button
              </button>
              <button className="flex items-center justify-center gap-1.5 px-4 py-2 bg-transparent border border-btn-text-disabled text-btn-text-disabled text-sm font-normal leading-[18px] rounded" disabled>
                Button
              </button>
            </div>

            {/* Light buttons */}
            <div className="space-y-3">
              <button className="flex items-center justify-center gap-1.5 px-4 py-2 bg-btn-light-bg text-btn-text-primary text-sm font-normal leading-[18px] rounded hover:bg-opacity-80 transition-colors">
                Button
              </button>
              <button className="flex items-center justify-center gap-1.5 px-4 py-2 bg-btn-light-bg text-btn-text-primary text-sm font-normal leading-[18px] rounded hover:bg-opacity-80 transition-colors">
                <LoadingIcon />
                Button
              </button>
              <button className="flex items-center justify-center gap-1.5 px-4 py-2 bg-btn-light-bg text-btn-text-disabled text-sm font-normal leading-[18px] rounded" disabled>
                Button
              </button>
            </div>

            {/* Ghost Light buttons */}
            <div className="space-y-3">
              <button className="flex items-center justify-center gap-1.5 px-4 py-2 bg-transparent text-btn-text-primary text-sm font-normal leading-[18px] rounded hover:bg-btn-light-bg transition-colors">
                Button
              </button>
              <button className="flex items-center justify-center gap-1.5 px-4 py-2 bg-transparent text-btn-text-primary text-sm font-normal leading-[18px] rounded hover:bg-btn-light-bg transition-colors">
                <LoadingIcon />
                Button
              </button>
              <button className="flex items-center justify-center gap-1.5 px-4 py-2 bg-transparent text-btn-text-disabled text-sm font-normal leading-[18px] rounded" disabled>
                Button
              </button>
            </div>

            {/* Ghost buttons */}
            <div className="space-y-3">
              <button className="flex items-center justify-center gap-1.5 px-4 py-2 bg-transparent text-[#386CFF] text-sm font-normal leading-[18px] rounded hover:bg-[#386CFF] hover:bg-opacity-5 transition-colors">
                Button
              </button>
              <button className="flex items-center justify-center gap-1.5 px-4 py-2 bg-transparent text-[#386CFF] text-sm font-normal leading-[18px] rounded hover:bg-[#386CFF] hover:bg-opacity-5 transition-colors">
                <LoadingIcon />
                Button
              </button>
              <button className="flex items-center justify-center gap-1.5 px-4 py-2 bg-transparent text-btn-text-disabled text-sm font-normal leading-[18px] rounded" disabled>
                Button
              </button>
            </div>

            {/* Link buttons */}
            <div className="space-y-3">
              <button className="flex items-center justify-center gap-1.5 px-4 py-2 bg-transparent text-[#386CFF] text-sm font-normal leading-[18px] rounded underline hover:text-[#143EFF] transition-colors">
                Button
              </button>
              <button className="flex items-center justify-center gap-1.5 px-4 py-2 bg-transparent text-[#386CFF] text-sm font-normal leading-[18px] rounded underline hover:text-[#143EFF] transition-colors">
                <LoadingIcon />
                Button
              </button>
              <button className="flex items-center justify-center gap-1.5 px-4 py-2 bg-transparent text-btn-text-disabled text-sm font-normal leading-[18px] rounded underline" disabled>
                Button
              </button>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            {/* Primary buttons - Small Size */}
            <div className="space-y-3">
              <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-btn-primary text-white text-sm font-normal leading-[18px] rounded hover:bg-btn-primary-hover transition-colors">
                Button
              </button>
              <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-btn-primary text-white text-sm font-normal leading-[18px] rounded hover:bg-btn-primary-hover transition-colors">
                <LoadingIcon />
                Button
              </button>
              <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-btn-primary text-white text-sm font-normal leading-[18px] rounded hover:bg-btn-primary-hover transition-colors" disabled>
                Button
              </button>
            </div>

            {/* Secondary buttons - Small */}
            <div className="space-y-3">
              <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-transparent text-[#386CFF] text-sm font-normal leading-[18px] rounded hover:text-[#143EFF] transition-colors">
                Button
              </button>
              <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-transparent text-[#386CFF] text-sm font-normal leading-[18px] rounded hover:text-[#143EFF] transition-colors">
                <LoadingIcon />
                Button
              </button>
              <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-transparent text-btn-text-disabled text-sm font-normal leading-[18px] rounded" disabled>
                Button
              </button>
            </div>

            {/* Outline buttons - Small */}
            <div className="space-y-3">
              <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-transparent border border-[#386CFF] text-[#386CFF] text-sm font-normal leading-[18px] rounded hover:bg-[#386CFF] hover:bg-opacity-5 transition-colors">
                Button
              </button>
              <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-transparent border border-[#386CFF] text-[#386CFF] text-sm font-normal leading-[18px] rounded hover:bg-[#386CFF] hover:bg-opacity-5 transition-colors">
                <LoadingIcon />
                Button
              </button>
              <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-transparent border border-btn-text-disabled text-btn-text-disabled text-sm font-normal leading-[18px] rounded" disabled>
                Button
              </button>
            </div>

            {/* Light buttons - Small */}
            <div className="space-y-3">
              <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-btn-light-bg text-btn-text-primary text-sm font-normal leading-[18px] rounded hover:bg-opacity-80 transition-colors">
                Button
              </button>
              <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-btn-light-bg text-btn-text-primary text-sm font-normal leading-[18px] rounded hover:bg-opacity-80 transition-colors">
                <LoadingIcon />
                Button
              </button>
              <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-btn-light-bg text-btn-text-disabled text-sm font-normal leading-[18px] rounded" disabled>
                Button
              </button>
            </div>

            {/* Ghost Light buttons - Small */}
            <div className="space-y-3">
              <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-transparent text-btn-text-primary text-sm font-normal leading-[18px] rounded hover:bg-btn-light-bg transition-colors">
                Button
              </button>
              <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-transparent text-btn-text-primary text-sm font-normal leading-[18px] rounded hover:bg-btn-light-bg transition-colors">
                <LoadingIcon />
                Button
              </button>
              <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-transparent text-btn-text-disabled text-sm font-normal leading-[18px] rounded" disabled>
                Button
              </button>
            </div>

            {/* Ghost buttons - Small */}
            <div className="space-y-3">
              <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-transparent text-[#386CFF] text-sm font-normal leading-[18px] rounded hover:bg-[#386CFF] hover:bg-opacity-5 transition-colors">
                Button
              </button>
              <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-transparent text-[#386CFF] text-sm font-normal leading-[18px] rounded hover:bg-[#386CFF] hover:bg-opacity-5 transition-colors">
                <LoadingIcon />
                Button
              </button>
              <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-transparent text-btn-text-disabled text-sm font-normal leading-[18px] rounded" disabled>
                Button
              </button>
            </div>

            {/* Link buttons - Small */}
            <div className="space-y-3">
              <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-transparent text-[#386CFF] text-sm font-normal leading-[18px] rounded underline hover:text-[#143EFF] transition-colors">
                Button
              </button>
              <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-transparent text-[#386CFF] text-sm font-normal leading-[18px] rounded underline hover:text-[#143EFF] transition-colors">
                <LoadingIcon />
                Button
              </button>
              <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-transparent text-btn-text-disabled text-sm font-normal leading-[18px] rounded underline" disabled>
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
