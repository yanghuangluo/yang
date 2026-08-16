from kivy.app import App
from kivy.uix.label import Label

class MyTestApp(App):
    def build(self):
        return Label(text="apk文件运行正常")

if __name__ == "__main__":
    MyTestApp().run()
