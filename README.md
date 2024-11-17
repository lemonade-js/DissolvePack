# DissolvePack by gooberlemonade

This animation pack allows for creating fake objects, and adds various animations to them. This pack was made for improving visuals for custom Beatblock levels.

## Supported Object Types

This table shows support for each block type. Here's what each support means.
- **Full**: Everything supported
- **Partial**: Only the start and end sprites are supported
- **None**: Completely unsupported

| Block Type | Supported |
| ---------- | --------- |
| Block      | Full
| Hold       | Partial
| Inverse    | Full
| Mine       | Full
| Mine Hold  | Partial
| Side       | None

## Animation Types

| Animation Type | Frame Count | Description |
| -------------- | ----------- | ----------- |
| off            | 1           | Static
| on             | 1           | Static
| dissolve       | 8           | Dissolve effect, similar to Beat Saber
| dither         | 7           | Pixel dithering effect
| swipe          | 9           | Swipe from side to side (rotatable)
| swipediag      | 12          | Swipe from corner to corner (rotatable)
| wave           | 12          | Sine wave that "washes" the notes away
| collapse       | 7           | Pixels collapse towards the center
| noise          | 9           | "Random" noise fade

## Usage
Inside the Beatblock editor, place down a decoration object. Edit the decoration object, check the sprite box on, and enter the following:

### Parameters
Syntax: `<block_type>!<animation_type><play_type><speed_in_fps/static_state>`
- **`block_type`**: Type of block to create (e.g., `block`, `mine`, `hold`)
- **`animation_type`**: Animation to use (e.g., `swipe`, `dither`, `collapse`)
- **`play_type`**: How the animation plays (`in`, `out`, or `static`)
- **`speed_in_fps/static_state`**: Speed of the animation (4 - 45) OR animation frame

### Examples
- `block!noisein12`: Applies noise in animation to a fake block at 12 FPS
- `mine!dissolveout30`: Applies a dissolve out animation to a fake mine at 30 FPS
- `hold!wavestatic6`: Displays the 6th frame of the wave animation for a hold note

## Visual Examples
### Dissolve Animation (Block)
**`block!dissolveout12`**

![Dissolve Animation Example](link_to_image_or_gif)

### Wave Animation (Mine)
**`mine!wavein21`**

![Wave Animation Example](link_to_image_or_gif)

### Dither Animation (Hold)
**`hold!ditherin12`**

![Dither Animation Example](link_to_image_or_gif)

## Feedback and Suggestions
Have any feedback or suggestions? Just ping/mention me (@gooberlemonade) on [Beatblock's discord](https://discord.gg/334Jscz9xZ)!