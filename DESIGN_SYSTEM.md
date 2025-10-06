# Portfolio Design System

## Typography & Font Hierarchy

### Section Headers

- **Label**: `text-sm tracking-widest uppercase text-cyan-400 font-semibold`
- **Title**: `text-4xl md:text-5xl lg:text-6xl font-bold`
- **Subtitle/Description**: `text-lg md:text-xl text-gray-400 leading-relaxed`
- **Divider**: `w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full`

### Card Headers

- **Card Title**: `text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-400`
- **Card Description**: `text-lg text-gray-400 leading-relaxed`
- **Card Subtitle**: `text-xl font-semibold text-cyan-400`
- **Card Meta Info**: `text-gray-400` (dates, locations, etc.)

### Hero Section

- **Greeting**: `text-lg md:text-xl text-gray-400`
- **Main Title**: `text-4xl md:text-6xl lg:text-7xl font-bold gradient-text glow-effect`
- **Secondary Title**: `text-3xl md:text-5xl lg:text-6xl font-bold text-white`
- **Description**: `text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed`

## Card Styles

### Standard Card

```css
className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50
           border border-cyan-500/30 rounded-2xl p-8
           hover:border-cyan-500/50 hover:scale-[1.02]
           transition-all duration-300
           shadow-xl hover:shadow-cyan-500/20"
```

### Icon Container

```css
className="w-20 h-20 bg-white rounded-xl flex items-center justify-center
           shadow-lg group-hover:shadow-cyan-500/30
           transition-all duration-300"
```

## Spacing System

- **Section Padding**: `py-20`
- **Container Max Width**: `max-w-7xl mx-auto px-6`
- **Content Max Width**: `max-w-4xl mx-auto` (for centered content)
- **Section Header Margin**: `mb-16`
- **Card Gap**: `gap-6` or `gap-8`
- **Inner Card Spacing**: `p-8` or `p-6`

## Color Palette

### Primary Colors

- **Cyan**: `#06b6d4` (cyan-500)
- **Teal**: `#14b8a6` (teal-500)
- **Emerald**: `#10b981` (emerald-500)

### Background Colors

- **Base Background**: `from-[#0a0f1c] via-[#0d1425] to-[#0a1628]`
- **Card Background**: `from-slate-800/50 to-slate-900/50`
- **Overlay**: `slate-900/50` with `backdrop-blur`

### Text Colors

- **Primary Text**: `text-white`
- **Secondary Text**: `text-gray-400`
- **Accent Text**: `text-cyan-400`
- **Muted Text**: `text-gray-300`

### Border Colors

- **Default**: `border-cyan-500/30`
- **Hover**: `border-cyan-500/50`
- **Active**: `border-cyan-500`

## Animations & Transitions

### Standard Transition

```css
transition-all duration-300
```

### Hover Effects

- **Scale**: `hover:scale-[1.02]`
- **Translate**: `hover:translate-x-2`
- **Glow**: `hover:shadow-cyan-500/20`
- **Border**: `hover:border-cyan-500/50`

### Background Animations

- **Blob**: 15s morphing movement for gradient orbs
- **Float-slow**: 30s floating with rotation for particles
- **Grid**: 20s vertical scrolling
- **Scan**: 8s scanning line effect

## Responsive Breakpoints

- **Mobile**: Base styles
- **Tablet**: `md:` (768px)
- **Desktop**: `lg:` (1024px)

### Font Size Scaling

- Section Headers: `text-4xl md:text-5xl lg:text-6xl`
- Card Titles: `text-2xl md:text-3xl`
- Body Text: `text-base md:text-lg lg:text-xl`
- Small Text: `text-sm` (labels, meta info)

## Component-Specific Styles

### Education Section

- Logo container: `w-20 h-20`
- Status badge: `px-4 py-2 bg-cyan-500/20 border border-cyan-500/40 rounded-full`

### Services Cards

- Grid: `grid md:grid-cols-2 gap-8`
- Icon gradient: `bg-gradient-to-br from-purple-500 to-pink-500` (varies by service)

### Skills Cards

- Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- Tooltips: Absolute positioned with cyan background

### Projects Cards

- Featured badge: Gradient overlay with staggered animations
- Filter buttons: Cyan gradient for active, slate for inactive

### Contact Cards

- Two-column grid: `grid md:grid-cols-2 gap-8`
- Form inputs: `bg-slate-900/50 border border-cyan-500/30 rounded-xl`

## Best Practices

1. **Consistency**: Use standardized spacing, colors, and typography
2. **Hierarchy**: Clear visual hierarchy with font sizes and weights
3. **Accessibility**: Sufficient color contrast and readable font sizes
4. **Performance**: Optimized animations with smooth transitions
5. **Responsiveness**: Mobile-first approach with breakpoints
6. **Theming**: Consistent cyan/teal/emerald color scheme throughout
