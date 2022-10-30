import React from "react";

const PlatformIcons = ({ icon }: { icon: string }) => {
  return icon === "pera" ? (
    <svg
      height="32"
      width="32"
      fill="none"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect height="32" width="32" fill="#FFEE55" rx="6" />
      <path
        d="M17.3297 8.29222C17.8074 10.2716 17.6459 12.0128 16.9689 12.1812C16.292 12.3496 15.3559 10.8815 14.8781 8.9021C14.4004 6.92271 14.5619 5.18157 15.2389 5.01316C15.9158 4.84474 16.8519 6.31283 17.3297 8.29222Z"
        fill="#1C1C1C"
      />
      <path
        d="M25.2186 9.99397C24.1606 8.87261 22.0556 9.17655 20.5171 10.6728C18.9785 12.1691 18.5889 14.2911 19.647 15.4125C20.705 16.5338 22.8099 16.2299 24.3485 14.7336C25.8871 13.2374 26.2766 11.1153 25.2186 9.99397Z"
        fill="#1C1C1C"
      />
      <path
        d="M16.8035 27.1648C17.4805 26.9963 17.6182 25.1567 17.1111 23.0558C16.604 20.9549 15.6442 19.3883 14.9672 19.5567C14.2902 19.7251 14.1525 21.5648 14.6596 23.6657C15.1667 25.7666 16.1265 27.3332 16.8035 27.1648Z"
        fill="#1C1C1C"
      />
      <path
        d="M9.90257 11.0206C11.8557 11.5966 13.2828 12.607 13.0901 13.2775C12.8975 13.948 11.1581 14.0246 9.20499 13.4486C7.25191 12.8727 5.82479 11.8622 6.01742 11.1917C6.21005 10.5213 7.9495 10.4446 9.90257 11.0206Z"
        fill="#1C1C1C"
      />
      <path
        d="M22.5789 18.5917C24.6518 19.203 26.1761 20.2421 25.9835 20.9126C25.7909 21.5831 23.9542 21.631 21.8813 21.0197C19.8083 20.4084 18.284 19.3693 18.4766 18.6988C18.6693 18.0284 20.5059 17.9804 22.5789 18.5917Z"
        fill="#1C1C1C"
      />
      <path
        d="M12.1001 17.1849C11.6158 16.6829 10.0272 17.4136 8.55185 18.817C7.07651 20.2205 6.27315 21.7652 6.75748 22.2672C7.24182 22.7693 8.83045 22.0386 10.3058 20.6352C11.7811 19.2317 12.5845 17.687 12.1001 17.1849Z"
        fill="#1C1C1C"
      />
    </svg>
  ) : icon === "myAlgo" ? (
    <svg
      height="32"
      width="32"
      fill="none"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.9766 31.9999C12.8169 32.0002 9.72809 31.0635 7.10077 29.3082C4.47345 27.553 2.42565 25.058 1.21634 22.1389C0.00703526 19.2197 -0.309462 16.0076 0.306877 12.9085C0.923216 9.80953 2.44471 6.96289 4.67894 4.72862C6.16001 3.23452 7.92161 2.04767 9.8626 1.2362C11.8036 0.424739 13.8857 0.00464508 15.9895 3.83043e-05C18.0933 -0.00456847 20.1773 0.406403 22.1218 1.20936C24.0663 2.01231 25.8331 3.19144 27.3207 4.67904C28.8083 6.16664 29.9874 7.93342 30.7904 9.87794C31.5933 11.8225 32.0043 13.9064 31.9997 16.0102C31.9951 18.114 31.575 20.1962 30.7635 22.1371C29.9521 24.0781 28.7652 25.8397 27.2711 27.3208C25.7914 28.8087 24.0312 29.9884 22.0925 30.7916C20.1538 31.5948 18.0751 32.0055 15.9766 31.9999ZM20.226 11.2241L20.3554 11.7226L22.9746 21.2167H25.1057L21.5304 8.90455L21.4434 8.56986H19.5846L19.5415 8.63696L17.8026 11.725L16.0198 14.8921L15.9766 14.9679L15.9567 14.8921L15.737 14.0781L15.1283 11.725L15.0628 11.4909L14.3887 8.90375L14.3016 8.56907H12.4461L12.403 8.63616L10.6649 11.725L8.88202 14.8921L7.11037 18.048L5.32753 21.2167H7.45703L9.23987 18.0496L11.0227 14.8945L12.7944 11.7274L13.0875 11.2257L13.2177 11.7274L13.7609 13.8129L14.4358 16.4105L14.6706 17.2963L14.2473 18.0496L12.4621 21.2167H14.5916L15.344 19.8803L16.6516 17.5599L18.1572 14.8945L19.9289 11.7274L20.2212 11.2281L20.226 11.2241Z"
        fill="#245EC6"
      />
    </svg>
  ) : icon === "algosigner" ? (
    <svg
      width={32}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M5.828 4.745 5 27.427h20.447l-1.076-15.563L30 4l-24.172.745Z"
        fill="url(#a)"
      />
      <defs>
        <pattern
          id="a"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#b"
            transform="matrix(.00331 0 0 .00353 -.073 -.092)"
          />
        </pattern>
        <image
          id="b"
          width={346}
          height={336}
          xlinkHref="data:image/png;base64,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Xby9Y0fCjlM13jU1O413LqtFa+W1XbvG7bq8O2R3Y51z3eY9+ntK94K98r0v9mXsu7E/an/LAeaBul+tf113kH6wpB6pn1bf0yBs6GhMa2xvimxqafZrPnjI5dD2w+aHq47oHVl2lHJ0wdH+Y0XHeo9LjnefyD7xuGViy92TY05eOxV/qu101OlzZ8LOnDzLOnvsnP+5w+d9zzddYF5ouOh1sb7Vs/Xgb56/HWzzaqu/5H2p8bLP5eb2Ue1HrwReOXE15OqZa5xrF6/HXG+/kXzj1s1xNztu8W89v513+/Wdwjt9d+fcI9wrua91v+KB8YPq3+1/39Ph1XHkYcjD1keJj+4+5j1++UT25HPngqe0pxXPzJ7VPHd7frgrrOvyi7EvOl9KXvZ1F/+h/ce6V3avfv0z6M/WnjE9na+lr/vfLHlr+Hb7Xx5/tfTG9T54l/+u733JB8MPOz4yP579lPrpWd+Uz6TPlV/svzR/jfp6rz+/v1/ClXIHXgUwONCsLADebAeAlgYAHfZtlLHKXnBAEGX/OoDAf8LKfnFAvACog+/v8d3w7eYmAHu3wvYL8mvCXjWOBkCSD0Dd3YeGSmRZ7m5KLirsUwgP+vvfwp6NtBKAL8v7+/uq+/u/bIHBwt7xuFjZgyqECHuGTZwvmfmZ4N+Isj/9Lscf70ARgQf48f4v4JaQimqkkC4AAAA4ZVhJZk1NACoAAAAIAAGHaQAEAAAAAQAAABoAAAAAAAKgAgAEAAAAAQAAAVqgAwAEAAAAAQAAAVAAAAAABArUaAAALX9JREFUeAHtnc1yG0eSx6uqScoRE9biYMmOsOWB57QjjWOoJzAka3w19QSCbnsT9QQib3uz9ASinkDUbdbSyPATLDcm1ru34do6aMZ74MTGRFgfQG9WE00BjQbQH/WRVf1HhA10oz5/2Uw1MrMzhcALBEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABMwSkGaHw2ggAAIgUI/An2+IQaLE1yIVAylFT/dOU3FCyumE3p+8eisOr47Ecb1RebWGouUlD6wGBDpD4IevxA4p129ow/11m06FOHj9RuyHqnChaNdJGN+DAAgYJfDvA9E7tyEeCkmKtt7rhBTu3StPxUG9bv5bQ9H6lwFWAAKdIZAp2U3xHW14u+mmybyw99tvxX7T/j76KR+TYk4QAIFuEsjuZFsoWU2N7LZ72q4bEkEo2pCkhbWCQMAE/usrca+BuaB0x4kUj/XdcemXDE9C0TIUCpYEArERIKXY13eiBvfV29oQuwbHszoUFK1VvBgcBEBAK9lzp3ZZozDIVnvH6IAWB9uwODaGBgEQiJhAFv+q7a1K/DqdiL+TWeCYQrBGxRCsrU0yGYj1IVwNUPX0Gj5/JkYN+jrtAkXrFDcmA4HwCWQKVlJ4Vq48KeaK7i6zF925iv/8w7uY1//+g7gzEWJ4+q35/yenjrWR+ZHNjghFa5YnRiMCFz4ebKtEDejv7/dSqO1UpH36O8wcF3SOnviRx+Q6PhYy/X48mRz974vRCODCIKAdWutsrSTrISncwQ83xANSsvqBBGsvUvC/tza4wYGn/w4ZHBFDdZJArzfobZ1XZDOTO3RR1Y2RPKY/3pF6M95/+XJ03EmAAWy6ipJ1vQ261g5++1Tcdj1v3fmgaOsSQ/sFAhc/vX6PFOwuXUztw21SeV++efsACncBs9cTU3PBd14XUTJ5KIoWUQclwsOpagS0ieDDT7/8C5kC9owoWT2tTHfTreS7i5e+3Km2CrSyTUBHDVDc6kPb8zQZn34J/UeTfq77QNG6Jh7JfKRg78gk0Xc4fQtb6pPt7fHpnbKF0TFkLQL0NJe2s/ZrdXLUeCzEkaOpWk1DTju8QKAegYuf3rhHd7D/Sv+9V69nvdZ0pzz41T99Jv7x9798X68nWpsikD3NJcS/mBrP6DgUTva7p+Ku0TEtDYY7WktgYx32VMmme672p80SuLN1RXt+HgtPc81P0PZIigdth3DVH4rWFekI5vngk8FACndKNkemle2Hn17fzY/xbp/Amqe5TsapuHb5KVnUBXn86c7S/ooKM9Ccl/9N3C+cZXsIRctWNLwW9tFHg36iEo8OEXlPr4EXlXhXs/JprlTs509j6dyw44n78Cpygt0MiT4UbUjS8rjWyWZyj6bve1xCL930qeg97tzx1NouS/b3Ydm0dP7g8rP5O0nXEQmkZPdJwQfhBMsZEje8QGA1AX0nSSFXf1ndys23cjK+9hJPklmDPTUZlMuafq6/ei2uUi6Dk3wBzh9ioAdbSNFfy+cP5R13tKFIyuM6p3ezHlfwbupUZnfW707gkzECpGR7q7JsSSWuzSpZymkwpLvLPWMLWDcQKXq54d5MsW5ZVb6Hoq1CqcNt9N0sxbQO2SCQYvAROeXYrCeihZBddmm8rP65/ts/vnN66Ttf+jmszUnOXtoWPLsGZxMbmAiK1gDEmIcYb6oBt/2lItnhtqbQ16OzbJHiHJbtg84fXHk2f+dKd76PqW2/rL2Nc1rR5w64puP3+8Ne/5+Hg6b92/SDom1DrwN9lZRO71oqIVXilk5iU6ktGq0loO9OJ8tMADp0K5kvhDh9iGF77cDmGhwVFX2TodWvxL0kcfePw+waoWhnaeDzHIEPPrkxoBP9uZM8Dnrnzqshj6WEvYozu6wsTwhEd5I3Z3+u6+Qyzu2ySftQrumd7K4vaUHR+iIfwLxKprfYLjOVX7NdW0ALO7e1vPqB/rk+G0al73x9hHLNKvomaLXJQCV+k+JA0TaRXAf6sHOCFZnDKVYkUvtYRw2IdEmBw1QcFn+uv7c5U1Wh9mz1O0wV/UH9nvM9tMmAzvTnz7o9gqJ1yzuY2Tg6wYrw4BQrEql+nEUNpEuqH5yGUc0la8niZYUYVJ+hZUtaQ1HRNxnRt8kgXzMUbU4C73MEWDrB5lZIB3CKFYlUPs7iZZfYZYthVHTnu+3cLksxu5U3s6QhKdm+b5NBvjQo2pwE3s8IMHaCna1x+gFOsSKRCsfTqIF+WVP9c302jCq78xVZKFdZcyvn9Bra2mX1wkjJejcZ5ICgaHMSeD8jwNoJdrbK6Qc4xYpEVh6veZprIYxqZXKZlTM1/vKBTlTTuPe0Y//KcEgf9X8sXlC0LMTAZxHsnWBFVHCKFYksPZ7enZbHRWu7bCGMSt/5SpfKitZAqRdbh2BlJgPHT60thT79Aop2HaGOfR+CE6woEjjFikTKj9c8zXV39ue6VspO7bK6DL0Bu6zeOSeTQS4JKNqcBN4zAkE4wYqyglOsSGTheNXTXNomevlbcZh3IiW7MrlM3s7ouyG7LDeTQc4IijYngXcRkBOsKC04xYpEZo5XPs1VEka1KrnMzLAmPz4o5rhtMjhHk0G+DyjanATeRVBOsKK84BQrEsmOtQlg6dNc2i5b+Lm+KrlM6QRtT9IaXr2ZT1jTdEiOJoN8L1C0OYmOv/f6lKRFpjvBYoBTrFR0q57mKoZRaaU8EfPVE0oHNXhSK/rZHLdNh+ZqMsj3A0Wbk+j4++ZY7VARxF7IGCZKDUJev+m1r3maay6MypNdds4B13T/nE0G+Z6gaHMSHX+XUt4JHQH9Q3EH6RNPpbjyaa6SMKpVyWVsXBcUNrZQe6zpPJxNBvmeoGhzEh1+v/DxYJsu/O0IEPS23k8GEeyj1Ra0CYDkqRNzl70WwqhWJpcpG6HtOVL0xRy3TYfkbjLI9wVFm5Po8LtUSfB3s7n4SMFEs5d8T3XfVz7NVQijypTysuQydSeu2F7bZWdjdit2W2gWgskgXzQUbU6iw+9UE2wQzfZpL/oOPZr91NzImqe5FsKoViWXqTl1peZFB1ylTksahWAyyJcORZuT6Oj7hUvXh7T1fkzbl4kKN3qihSD03enSp7lKwqh++Gp5McYWy1jetSTH7fLGq78JxWSQ7wKKNifR0XelJN8qCg1lop1iDbsG200r2ezudMkOimFUPuyyVCp8LsftkqWuPR2SySDfDBRtTqKD7zqBDGXYH0S49V7XSpKvscvOhVFNnWXlyWUsXQzFHLdtpgnJZJDvE4o2J9HB98lm4vSPzSXiVMa7tyLHVU9zkXNwIYxqeufbL45j61jbZWdz3LaZJzSTQb5XKNqcRAffo3KCFeVHTrEuxNTqu9OlT3OVhFFNk8v0i7isHadiZKIkjV5fZjKQS8rvWNuAmYGhaM1wDG6UGJ1gRSFsnVe7xXMxHZOSXZllS9tlZ8OoyPm1s9RZZgMMKXqyy942NTTly31Ipq6eqfFcjgNF65I2o7lidIIV8cbuFFv1NFcxjErf+ZKS+qbIyPLxnG24zVy/+d3wDplBBm3G8NkXitYnfU9zR+wEKxKN1imm7bLcS4XP5rgtCqbOsTYZUPu9On24tYWi5SYRB+uJ2QlWxBejUyyzy6ZLFM/pz/W5MKo1yWWKyNof0xpM2WX1YkI2GeQwoWhzEh16j9oJVpRjhE6xVU9zkcng5qxddmXS7yIrE8da0ZNt2MRQeozQTQY5ByjanERH3rvgBCuKMian2KqnubRdlirIHuX713e+S5N+540Mvxdtw22Gj8FkkO8fijYn0ZH3LjjBiqKMxSm28mmukjCqcxuOH7EVYi7HbVEOdY/pwYTvQo0yKO4VirZIJOLjDjnBilIM3imm707J617+gElJGFUWLyuFu5wPtAYTpcJzwZHJQO+1nx+H/g5FG7oEa6y/S06wIpbQnWJrnuaaC6PSSpl+wu8VGVg8Xshx22auzGTgdv1tllupLxRtJUxxNOqUE6wosoCdYque5tI20dkwKq1kVyWXKWIxcZwKMafo246ZmQzaDsKsPxQtM4HYWs7FS1/qn5F9W+OHMG6ITrE1T3MdFcOoViaXsSMko3bZ2EwGOXIo2pxE/O+34t/i6h1Kob5e3YLXt/rudOXTXFLsz654VXKZ2XbGPpNd1lSpcL2mGE0GOWso2pxExO/aCUZmA3eOEbYs0+2Q0ieuKhWuEaeTd3XetFJemlzGkjx0vKyJUuH58mI0GZztLf+A93gJTLY2hvHurt7OyCkWRFLwKk9zSSFO9O5Jya5MLlOPUMXWqVm7bKwmg5wm7mhzEhG/S5F23mxwJt4AnGJVn+aizFiHel9kl9XJYvr6s4sXKfiFHLdt5o3ZZJBzgaLNSUT6/sEnNwa0tX6k22uyrR5np5g2AVR5mit/AsuHXfaXN2ZK0uTCi9lkcLbH/APe4ySgJO5mi5KVqfyieI7LcaWnuaZFDjO7rON4U9N22dhNBvl1hTvanESE71Mn2DDCrbXbEpkPODrFKj3NdfoUWJada1VymXaAynvnd9Hl39Y/2wWTQU4FijYnEeH7eFMNItyWkS2lImEVhaHvTqs8zUVtsuxcq5LLGAFUGETbZYsxu4UmtQ+7YDLIoUDR5iQifFdS3otwW2a2pMQtTjXFthKxu25j+o5SZ+damVxm3SBNvqe7aJHMx+w2GWa2T1dMBvmeoWhzEpG9wwm2VqC9c+fVcG0rRw0ozvnXK6eaZufSd77ScUma/C565fpqfNklk0GOBYo2JxHZO5xgFQSaSjZPipEy+5+lKz61y97W3/uwy87muF26xhpfdMlkkGOBos1JRPQOJ1hFYTJyiqlNcZ8et80eQChZfZa0ZVVymZI+7U+V5LhtO2jXTAY5LyjanERE73CCVRcmF6eYLj+TSioBo+2h714n6Vjc1tm5tF2W7nr33n1l+dPMXbSpmchkMKB/TNztwdTCDYwDRWsAIrch4ASrIRFGTjH9E52U6mepEFf1f5Sw5bMrz8VBZpddlvS7xlbrNB1PxO3Z2mN1+pa17feHPTIZPCz7rgvnNrqwyS7t8dQJlva7tOeWez11ip3QT3cmr6JNlOyyj2lpfVfL09ENnz8TI5PzqV9l1SGc7cHk2k2MhTtaExQZjQEnWANhMHKKFVc/tctuF89bPF7IcWtiLrpDd7kHE0s2OgYUrVGcfgeDE6whf0ZOsdkdVE0uM9un1Wdtl03EzVZjoHMpASjaUixhnoQTrLncuDjF8h1ou2yV5DJ5exPv2mRg0i5rYk2xjAFFG4skaR9wgrUQJiOnmN7FuqTfLXZa2lUrWbINH5R+iZOtCUDRtkbIY4ALHw+0DazPYzUzq6BYTJmmt6Uaf6b/m6jxVSnkPtUHOJ5pxeEjmyfFqiT9NgqMTAam8xgYXV8EgyHqIAIh6i1Ixa9yACUc33/50/O9EsRHH/UHB5NJ8lhycpKcOsW8Rh9QvOy203hZqtKgUx+WyAinDBLAHa1BmL6G6vUHPSHTHV/zl82bKdkfS5Vs1vzl8ej4tRrTHzijO1tyik1/GZRtyfq5abysDuVy9qJoAKOlwp0tPLCJoGgDE1jZcjfHaod+jvfKvvNzLj1+uULJ5ms6OR6dyIm6nR9zeJeJ8vYPVuilwjnIj+saoGi5SqbGuqSUd2o0t940FXJUdZKXL56NUpGeVG1vux39g3XHR/pEbZclM8rQ9v7Oxie77OWn61MznrXHh1YEoGhb4fPfWf/UpT/Qbf8rebeCVI0fvDta/4nW/2h9K2ctelvvJwNns9FE2mQAu6xL4u7ngqJ1z9zojAydYEc/H4+O6mySzAeHddrbbkuK39kvBFKyPkqFI17W9kVUGB+KtgAktENKGD3gtGYK5ap1N6vXrs0HQpp9tr4VE2LqynwQeqnwVpw71BmKNmBhX7h0fUjL77PaQjIZNVpPmj5p1M9SJxclyWMoFW4Jf3TDQtEGLFKl5C1Oy6dQoQMdttVkTa/U5ICbU6zJPqr20XbZiXCbMUzHy14dLU0uXnXpaNeAABRtA2gcuugEMpREecBhLfka1GT8KP9c912HeglZPVqh7vgN2vdslST3ZJdFvGyDi8BUFyhaUyQdjzPZTO45nnLNdBQ7+2I0WtNo5ddqLGvbd1cO2PLLVNphfG7LbW5WSb80Lj9ze/fcEn103aFoAxUpNyeYmMjWNlZuMbXkoDPuFIuhVHigfzJelw1F6xV/s8k5OsHkxvh+s90UeylWd7UmnWLaLuu6VLi2yyL1YfEac38MReueeesZuTnByFY8auoEK8JQ6u1B8ZzPY/2kmKn5fZQKh5I1Jb1240DRtuPnvDdHJxglkGnsBCsCzBQ2p5haIYw4xX74SnxDe+0X92vtOBWHSH1ojW7tgaFoayPz24GfE0ycUCrEA6NUmMXUtnWK+bDLyg1x16hMMFgrAlC0rfC578zNCUaxs8Yfn+UWU9vGKZbZZQMvFe7+Ko9vRijagGTK0QnWJnZ2GfosfSKvRDOiqVMss8s6NBnokjSmS4UvkxPOVycARVudlfeW7JxglLS7bezsMqj8Es3Ud4pNS4X3l+3R+HlySsIua5yqkQGhaI1gtD8ISycY3T3Z2nmWaEaIY1vjNxi3R+V3+lX7kfNrx2nqQ10qfEPcrro+tHNLAIrWLe/Gs022NoaNO9vq2DSBTMX1UALxRxWbWm+WleapmMdB22Up5E1HGbh84RFbl7RrzgVFWxOYr+b0h84qgQxxeGIqdnYZ09fqraGHIJbNUPG8FIdVSvPko/koFX75W/NOyXw/eG9PAIq2PUPrI1y89OUOTdK3PlGNCSjvrPFog+L0p4lmfOepTY+lHFcOlUKp8KIUcawJQNGGcR0wu5slJ5jp2NklcpBjub/kKyenpZpcq3rn/ucbYuDcLkuP2DoBgUlaEYCibYXPfmftBKPYWX1Hy+ZVp/hi20X/svH2yF+eWnm3qpLVdtlEiodt91unvw7lwiO2dYj5awtF6499pZnTLX/lr5ctUKmxs7tMbzG1E/Hgrz8+q2wjPrfh+BFbIR5ceSoOlskI53kRgKLlJY+S1dSP3ywZxOSpo6p3eaYmdR9Tmx6/2hjvVV1/Fi/r8lcHSoVXFQ2bdlC0bESxuJAPPrkxoLP9xW/8nWlSfLHtal0Wb9RmCm2XzRxxFRauTQZO7bJC0Ppgl60gGlZNoGhZiWN+MUqyC+kSwnLs7DyBmSNHiWZUKmrZZaeP2M4s1O5Hyi2BeFm7iK2MDkVrBWv7QadOsGH7kcyNQH/kjYsvtl2Fi0Qz2UMJNaIpqFT4PdpXv+3eavSHXbYGLE5NoWg5SWNmLeNNNZg5ZPHRRgKZqhvLnGJSHlVt36DdUZ2HEnyUCn/1Ruw12Be6MCAARctACGVLUFLquyVGL3sJZKpu0l5MLT2UoMY3q65D22VRKrwqLbTTBKBoGV4HHJ1gZDZ45BuVreKNFNVwu2okBSnZnmu7LOVNgF3W98XXcn4o2pYAbXTn6ARTanJgY6/1xzRbvDGzy754Nqq6DpQKr0oK7WYJQNHO0mDwmaMTzGTxxbaIU/XWXI6FmslitF2WWOy23UPl/hQv+8sblKSpzItxQyhaZsLh6ASjuz7vZoNcTD8fj46EkeKN9ZLFZHbZ1K0zSsfLXh2Jk3zveA+XABQtM9nxc4JZKL7YlrmBmNo6yWL0clEqvK3Qut0fipaR/Jk6wcz9VDfEum1MbWaXrZjEWy/ZdalwSfHKKElj6GJhMgwULRNB6GWwdIJNxmzMBrmo2iSayR66+PH5Xj7WuncfpcJFYq9E0Lr94ns7BKBo7XCtPSpLJ5jF4ou1ARU6NEs0kx6/VtWTeGu7LN1dOo1nprwJN5H6sCDsCA6haJkIkaUTzGLxxbbY68bU1k0Wo9fno1Q4pT48assG/fkRgKJlIhMp2aVD9JdAprJMqsfUSqH2qz6UoKdHqfDKQkDDCgSgaCtAst3kwseDbfqJum17nprjWy++WHM9C80rF2+smcRb22Wdpj5EqfAF2cZ2AoqWgUSlSu4wWMbcEkjRHMydYHiQ5YxdG1ObHv/1xZ92qy7fh112PBG3YZetKqEw20HRepZbrz/oCZnueF5GYfr0+G8//emwcJLlYUp3q8sXppPFTK4t/37xG7LLPqaz/cVv7Jyhf9D2P3/mu9Kvnb1h1HcEoGjfsfDyaXOsdqSQPS+TL5nUZfHFJUuofPp1Mh4tK96YptWLK+oJp3bZ7cqTt294hHjZ9hBDGAGK1rOUlJK3PC9hYXqXxRcXJq95YllMrX4ooc5duZdS4YmonJqxJhY0Z0YAitajQHTsLCUpGXhcQtnUzosvli2izrmFmNpUjOok8dZ2WZQKr0McbesSgKKtS8xg+8lm4jQYvsrSfRRfrLKuVW3mizeSXTYZ317Vvvjde5viIZ3rF8/bOtZ2WZQKt0WX57hQtB7lIiW7u9kAYmeXCGyaaGaiJjfrxsumwqEcKJQLdtklMoz49EbEe2O9tQuXrg9pgX1OiySFc/DXGslWOK1dJ5p5b6J6WRrFigujeNltp/GyKBVeUTLxNYOi9STTzAlGmo3Ty2fxxbYcsphaUT1f7DReVodyOXuRuO9e/qM4djYhJmJDAKYDD6Lg6QTzX3zRpShQKtwlbcwFRevhGuDoBKO7rUceUHiZUsfLSiGGziYnu+zlpw5L4DjbGCaqSgCKtiopg+04OsH4FF80CLpkKG0ygF22BAxOWSUARWsV7+LgHJ1gnIovLhIzd4aUrI9S4fvIY2BOhqGOBEXrWHIcnwTjVHzRpjjILvsNjd+3Ocfs2GSeOLj8TNyfPYfP3SQARetQ7mydYD89P3CIwctUulS4a7ssSoV7ETXLSaFoHYqFpxNMjhwi8DKVtstOUCrcC3tMekoAcbQOrwSWTjCGxRdNimTGLusuQ1oq7sIua1KK4Y+FO1pHMmTpBGNcfNGUWM5tZcUV+6bGWzcO7LLrCHXzeyhaR3Jn6QRjXHzRhFhQKtwERYxhggAUrQmKa8bg6QSjRSeT0ZqlB/u1tsvKNIsycLYHqcQ1mAyc4Q5qIihaB+KabG0MHUxTdwr2xRfrbmi2fVYqXApndlmd+nCdktX/4F689OXD2XXiczcIQNE6kDPFqd5yME2tKUgxHNTqEFBjD6XCD6ukPky3ku/IIbrT61GdOLw6RQCK1rK46Q5mh6boW56m5vDhFF+suTHhqVT43XXrvPjpjXvUpk//9bbOq9117fF9XASgaO3Lk9/drIgzdjazy4osysC+VKczVCkVriNO6FfNXr4oKdTX+We8d4MAFK1FOWubnP6paHGKRkOHVHyxzgY5lgrX14CSUt/NzrzS7Y8+GQxmTuBj5ASgaC0KeLypBhaHbza0LlwYaBWFVRt2XiqcOFazy27o5OL94tpTmdwpnsNxvASgaC3KdvFOxuJkFYeOMYGMNhk4TX1I+WXlhri9DvmpXTbdLm1H9eLgFCslE+VJKFpLYv3gkxsDGrpvafjmw0YYO3tuw7l5Zu0jttoJOmuXLRFY79x5NSw5j1MREoCitSRUJRmGdFHavhjNBmQHd+Zc0vGyl78Vh6sum6lt/ptVbbLvUuls3WvXggZWCUDRWsA7/UMbWhi61ZAhF19ctnGdNCZ1VS68YqnwdDN5SOvtL1vz2XkyH8ApdkYj6g9QtBbEy9IJFmkCmSQRAwsiXBxS22XpEdvFL+bPZHZZUqDzZ5cfpSJhF5WyfLX4pikBKNqm5Fb04+gEo7u+RyuWHOxXiXJjNqjyiO0HFLK1xi67yFmJW3CKLWKJ7QwUrWGJcnWCxVp8UQpR7tU3K9cHV56ufmRZm4sSlZkM6s4Mp1hdYgG2h6I1LDSOTjARaeysDusi8dlVtBVLhZNdVju/9Hrqv+AUq88ssB5QtAYFxtUJFmPsrBYbFVscGBRf2VAnNeyyzW2tcIqVsY/qHBStQXGydYLFW3zxC4PiWxiK7Npr42UvfDzYrm2XXZhJ0I8OOMVKsERzCorWoCh5OsHiTCCjxUb22YFB8RWHqmSXVUnyuNix0TGcYo2whdIJitaQpLg6wVI1fmBoi6yGIfusts32rSyK7LKv3oi9dWNPqxqbWgOcYuuAB/w9FK0h4bF0glHs7M/HoyNDW2Q1DD12O7C0oMwue3UkTlaNr+Nl6Ym04ao2tb+DU6w2slA6QNEakBRbJ1jExRdtPXabjtfbZTN5z+SXNXAJnQ4Bp5gxlNwGgqI1IBGeTjDaWIQJZHJx0QME2nRg7kXmgnEqrl15vjpeVj9coEvSmJt4fiQ4xeZ5xHIERWtAklLKOwaGMT1EtMUX/3yDzAZmCy8+ePVaXP38mRitE8LW+y3iZdcNrr+HU6wKpeDabAS3YmYLPg3vMXx3ZWCPdMd3YGAYlkPQ3cHAyMLoQY5Uirv01FclO/aHn36p/0EdGpl7+SC9zffVDlmID5Y3wTehEYCibSkxqThmytfFF58fttwa2+5Kii8oxrXN64QCV/cvPxP3qw6i7bI0Z+X2Vccta6eEvEXnD8q+w7kwCcB00EJuvT6VjZbpToshrHRNIy2+qGG1TouYikOZiKt1lKxtu+zCRUBOMf1LaeE8TgRLAHe0LUS3OVY7ZJ/ttRjCStdYiy9qWI3TImpn10TcrmKHLQqFKiHco3P94nmbxzIh84GoZtKwuQ6MbYYAFG0bjsnkSL7duNZmCNN9xxtvTyh29tj0uFzGa5IWUac4fP1G3F8XG1u2x6lddrfsO5vnpJB36E76/snJ6MTmPBjbDQEo2hacY30YoAUS613psdvtypPkzq5nze4MtV12IsQezenj1aMIhwE5xQ59TI45zRKAojXLE6NZJFAjLWJtZ1fZsnW8LCnZXtl3Ls7R3DrKAYrWBWzLc8AZZhkwhjdHoFJaRHJ2UZ6Cz+o4u8pW+OGn17+h8/2y75ydI6cYqi84o211Iihaq3gxuGECXywdb/pkFynYm01ssbPjXrh0fUi5wXZnz/n6vHVesViHr/3HMi8UbSyS7MA+6Kf0oGyb2tlV9cmusv6z507zVkh9N8vipZ1iLBaCRbQiAEXbCh86eyVAzi6Kif3syjOx1/YuNt/HZCt5TArdm102X8fMew8lyWdoBPoxeGeYDmAn9pz+MAK9FPgvm5K+3E6E+CbLc5CKB23tsGU7pmoJ35PZYLvsO1/nUpnoON6Rr/kxb3sCwSvarQ2xSynz9IWIV8wEyAYrlbj22z+Kqza3KSfqMFUpr5/rU6cYYmptSt7u2DAd2OWL0c0QOCE77E1Sssdmhls+yssXz0Z0xzxa3sLPN3CK+eFualYoWlMkMY41AjoZd9UMW0YWkaZPjIxjcBA4xQzC9DAUFK0H6JiyOgEdUbAuGXf10aq1fKUmB6lIT6q1dtYKTjFnqM1PBEVrnilGNEQgU7IUUWBouMrDnBxTfgHJr3rw1ClWeR9oyIcAFC0fWWAlMwR8Kdl8CWos+VUPxpNiuXiCe4eiDU5knVjwIx0b63On2inG0Hwg4BTzeVU0nxuKtjk79LRD4IhyFezaGbruqIrdXS2cYnVlyKM9FC0POWAVmoCOlU3a5yowBVOptwemxjI4DpxiBmG6GgqK1hVpzLOawLsHEo5XN3T37UudQJ1hTC05xXg9UOFOJMHOBEUbrOgiWjhDJXtGl2FMLSl/pE88E1AYH6Bow5BTzKt09tRXE4hcY2rhFGsiTX99oGj9scfMRMD5U181qeuYWsrm9ahmN+vNpVBfW58EExgjAEVrDCUGqkvAx1Nfddeo2+tEM0362e2TbiN9ol3CJkeHojVJE2NVJuD7gYTKC6WGWaIZYT+hTZ016bYTpW7V7YP2fghA0frh3ulZQ1KyuaBSIRmaD+QOaorlEuL9DkXLWz4xrs77U19NoL5Wb+836We5T+/ceTW0PAeGN0AAitYARAxRmQCjp74qrzlreJpohl+eWpFKOMXqidJL6+ArLOiniQTVjvJCD5PWIXAiN8Tdq08Ft/SDlfcgx3Kfqi8MKndw0ZBiarVT7OWL0cjFdJijGYHgFS0lhD6grev/8AIBqwR+2Xh7tDVRFO4le1Ynqjl4KpId6jKq2Q3NHRKA6cAhbEwVNgGuMbVCiVtwivG+tqBoecsHq2NGgGdMrYBTjNl1UlwOFG2RCI5BYAUBrsUb4RRbITQGX0HRMhAClhAYAaaJZvCkGN/rCIqWr2ywMqYEmCaaoeCbzCnGlFq3lwVF2235Y/cNCGROMSmPGnS12wVOMbt8W4wefHhXi72fdb3QH2yTk4NjMuXjv/34fP9sofjAhgDLmFoxdYqdiPtsQGEhGQEoWsIgx8kdKcWQ2zUh0/Q2tzVhPacEtFPs4qfX2cXUTp1iULTMLtTOmw56/UFPyFQHfPN7JZMRv0VhRe8I8CveqKsvwCn2TkJcPnVe0W6O1Q63J330xZHS025ZzSouVwrWsUAgVW8PF04yOAGnGAMhFJbQeUUrpeRom9Wa9klBVjhkRuDn49ERx+KNeFKM2YVCy+m0or3wMTnBhNjmJ5b0+G8//Ynl3RI/Vp5XxDGmlpxiW+8nA89kMP0MgU4rWql4lm2mJNOjGRnhI2MCXGNq6QaC5y81xrK0ubROK1quTjClxvs2hY6xzRFgm2iGnGL6F5u5nWKkNgQ6q2gvXLo+5OgE07l14QRrc0m778s00YyQidpxTwMzlhHorKJVSrIsbCdF+qhMUDjHl4COqU1FesJthXQjAfMBE6F0UtF+9NGgT3eOAyYymFvGL/83gRNsjkgoBwxjaskphphaHtdPJxXtZDO5xwP//Cp07OzJyYjdndH8KnFURoBp8UZ6UIzntV7GMOZznVS09LjtgKNQ1WQMswFHwVRYE9vijXSto/pCBQFabtI5RaudYMS0b5lrg+HTYxTYa4CNUZd0Ih4wWs7ZUrbOq92zA3zwQqBziparE4ykz/KP1MtVGeikr5MxnGKBys72sjulaDk7waSCE8z2xW57fLYxtXCK2Rb92vE7pWi5OsEQO7v2Og2mAdeYWjjF/F5CnVK0XJ1giJ31+0dgcna2xRvhFDMp5tpjdUbRsnaC/fT8oLbk0IEvAZ6JZgScYv4umc4oWq5OMCSQ8Xfx25pZJ5qxNXabcfGkWBt67fp2QtFydoKlaoxog3bXMLvebGNq4RTzdq10QtGydYKJ9DhLHu1N/JjYFgFdvNHW2G3GhVOsDb3mfTuhaNk6wVLB8o+x+eWEnjkBrolmdE0xPCmWS8nde/SK9uKlL3cIZ98d0hozofhiDVghNmWZaAZOMQ+XUvSKlpiyTIeoE8gg76yHK97hlFyLN8Ip5vAimE4VtaLVTjAyG+g7Wn4vFF/kJxPDK2JbvBFOMcOSXj9c1Ip2srUxXI/ARwsUX/RB3cucTGNqySmGpOAOL4ioFS09ccXUbIDiiw6vca9TcS3eCKeY28siWkXL2QmG4otuL3Kfs2UxtSJ94nMNS+bu4UmxJWQsnN6wMCaXIb/mspC5daD44hyOLhyoSXKQKn6/rqRQ+m9krwsyyPdITuiHv7kyfJgfu3qP8o526gQbuoJYZx4kkKlDK462bGNqRbqNmmJurrEoFe14Uw3c4Ks/C4ov1mcWRw+eMbWpSHhG5cQh9LNdRKlolZT3znbI6AP9bEHxRUbycLkUrsUbhRK38KSY/SshOkX7wSc3BoStbx9d/RlQfLE+s1h6cE40c+68GsbCmes+olO0SvJzOpwKH8UXuf4RuFrXZJI+cjVXrXlSydNxXGsTvBtHpWg5O8HoMkA6RN5/C9ZX9yaZHKYiPbE+Ud0JKNEMnGJ1odVrH5Wi5ewEQ/HFehdmjK0ZF2+ksnVwitm85qJStFydYCi+aPMSDmtsrsUb4RSzex1Fo2g5O8EQO2v3Ig5pdLbFGynRDJxi9q6kaBQtaycYii/au4IDHDlN5fcslw2nmDWxRKFoOTvBUHzR2rUb7MBsY2rhFLN2TUWhaDk7wVB80dq1G+zAjGNq4RSzdFVFoWjZOsFQfNHSZRv+sFyLN8IpZufaCl7RsnaCofiinas2glH5JpqBU8zG5RW8ouXrBCNxofiijWs2ojF5JpoRcIoZv8aCVrS9/qAnZMo1+9ATFF80fr1GNaCaiBHLDcEpZlwsQSvazbHaoYqePeNUDAyYpuLAwDAYImICjGNq4RQzfN0FrWillEwLzKH4ouHrNN7hmBZvhFPM7CUXrKK98PFgWwqxbRaHmdEQO2uGYxdGYVu8kZ4U23o/GXRBBi72GKyilYpvuWQUX3Rx6cYxx2lMLc+qyHQjw/QXY3iyD1fRksGeJW4UX2QpFs6LUmPJM4Um/Y3pX46c2YWytiAV7YVL14cEuM8RMhLIcJQK7zUxjqkVMlFco3p4C7WwuiAVrVLyVmEfbA5RfJGNKAJbCM+YWorqgfnAwJUUnKLVCWQo9mRgYO/Gh0DxReNIOzMg20Qz5BRD9YX2l2FwinaymbCscKtFgeKL7S/Iro7AOtGM5Ps3F8r1EpyilVydYJRA5uWL0SgUwWOdDAlwjamlvzmUJG93vQSlaDk7wchs8KidKNC76wQYx9SKrfNqt+vyabP/oBQtZyeYUpODNoJAXxDgXLwRTrF212cwipazEwzFF9tdhOj9jgDb4o1wir0TUoNPwShazk4wxM42uPLQpZTAaUytOCr90vPJFE6xxhIIRtHydYKJk5covtj4AkTHMgLySdlZ7+fgFGssgiAULXMn2GFj+ugIAiUEGMfUwilWIq8qp2SVRmgDAiAAAm0IfHZl+B0pm0GbMULuuxHy4rF2EACBMAik/xA30/dEL4zVYpUgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAALxEPh/Mo9+ThV6wZgAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  ) : icon === "tickcircle" ? (
    <svg
      height="14"
      width="14"
      fill="none"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.00016 0.333008C3.32683 0.333008 0.333496 3.32634 0.333496 6.99967C0.333496 10.673 3.32683 13.6663 7.00016 13.6663C10.6735 13.6663 13.6668 10.673 13.6668 6.99967C13.6668 3.32634 10.6735 0.333008 7.00016 0.333008ZM10.1868 5.46634L6.40683 9.24634C6.3135 9.33967 6.18683 9.39301 6.0535 9.39301C5.92016 9.39301 5.7935 9.33967 5.70016 9.24634L3.8135 7.35967C3.62016 7.16634 3.62016 6.84634 3.8135 6.65301C4.00683 6.45967 4.32683 6.45967 4.52016 6.65301L6.0535 8.18634L9.48016 4.75967C9.6735 4.56634 9.9935 4.56634 10.1868 4.75967C10.3802 4.95301 10.3802 5.26634 10.1868 5.46634Z"
        fill="#006174"
      />
    </svg>
  ) : null;
};

export default PlatformIcons;
