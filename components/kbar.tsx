import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  KBarResults,
} from 'kbar';
import { $ } from '~/libs/core';

export default function KBar() {
  return (
    <KBarPortal>
      <KBarPositioner className="z-50">
        <div className="pointer-events-none fixed inset-0 h-full w-full bg-white/50 backdrop-blur dark:bg-black/50" />
        <KBarAnimator
          className={$(
            'bg-primary w-full overflow-hidden rounded-lg shadow-xl',
            'dark:border dark:border-neutral-black'
          )}
          style={{
            maxWidth: '600px',
            boxShadow: '0 16px 70px rgb(0 0 0 / 20%)',
          }}
        >
          <KBarSearch className="box-border bg-[#ffff] dark:bg-[#1a1a1a] w-full border-none px-6 py-4 outline-none placeholder:text-tertiary" />
          <div className="kbar-scrollbar bg-[#ffff] dark:bg-[#1a1a1a]">
            <RenderResults />
          </div>
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  );
}

function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div className="text-secondary mx-3 py-2 text-xs">{item}</div>
        ) : (
          <div
            className={$(
              'mx-3 flex cursor-pointer items-center gap-3 rounded-lg p-3 text-sm transition-colors',
              active && 'bg-[#ededed] dark:bg-[#262626]'
            )}
          >
            {item.icon && item.icon}
            <div className="flex flex-col font-medium">
              <div>{item.name}</div>
              {item.subtitle && (
                <span className="text-secondary text-xs font-normal">
                  {item.subtitle}
                </span>
              )}
            </div>

            {item.shortcut?.length && (
              <div className="ml-auto flex gap-2">
                {item.shortcut.map((sc) => (
                  <kbd
                    key={sc}
                    className="rounded-md px-2 py-1 text-xs"
                    style={{
                      background: 'rgba(0 0 0 / .1)',
                    }}
                  >
                    {sc}
                  </kbd>
                ))}
              </div>
            )}
          </div>
        )
      }
    />
  );
}
