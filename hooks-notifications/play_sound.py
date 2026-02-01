import pygame
import os

def main():
    pygame.mixer.init()

    sound_file = os.path.join(os.path.dirname(__file__), "ulala.wav")

    if not os.path.exists(sound_file):
        print(f"Error: Sound file not found at {sound_file}")
        return

    sound = pygame.mixer.Sound(sound_file)
    sound.play()

    while pygame.mixer.get_busy():
        pygame.time.Clock().tick(10)


if __name__ == "__main__":
    main()