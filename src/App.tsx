import React from "react";
import Carousel from "./Carousel";

function App() {
  return (
    <div className="App">
      //@ts-ignore
      <Carousel
        slides={[
          {
            title: 0,
            key: 0,
            movie:
              "https://occ-0-3409-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABaxvzq-QrYi7gL4wOyOBc63ao-5441L6LgSYJ5KfsOAedVyIDHPgkNXyU8xuKD6lRdr7CrN2Eg9WtfBW6yRCHDpdBWjuFbEQ.webp?r=88d",
            color: "red"
          },
          {
            title: 1,
            key: 1,
            movie:
              "https://occ-0-3409-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABd0Ng-XYm6lVJoQkjZv1fRFK-eEpRGrYZwqv6g4R4mMbaRntHFu5D_iVxuZEiFs74hKt4RTzYqRv8vgsrBqcqZEpSrGDTBV-.webp?r=e8f",
            color: "green"
          },
          {
            title: 2,
            key: 2,
            movie:
              "https://occ-0-3409-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABQTuEMRqug-Pb0-w5xE3z0gFDSOpKVcVWNu-qwqwa0TfN0zffHhr2b2NBZdnK8t3EEI8M7ESi4dBQ1SWBVADjNFzAQ_8TiyH.webp?r=72f",
            color: "yellow"
          },
          {
            title: 3,
            key: 3,
            movie:
              "https://occ-0-3409-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYHPj_fHm-MQx-fxFppjfWz8UJY0WwurrKOoV2Q4GJ2oKYWgaqZoVb-HxDyXdX0eJU81Xv2CS_KeLsdpG2wENCvbPEQRPT50MpeCJjKbJIYEtTlKgVY3L8SzCy5BbYYwXg.jpg?r=6b9",
            color: "blue"
          },
          {
            title: 4,
            key: 4,
            movie:
              "https://occ-0-3409-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTHSLjT6Oqkl4TS2OSEuBhIfW6xB5-pyEOlIzoeNtuL_OLB_32ogRbGlNMKQ-y6kbzm6_QiMl7_h3kqQgBlo6UWkrWJ33G0s.jpg?r=854",
            color: "orange"
          },
          {
            title: 5,
            key: 5,
            movie:
              "https://occ-0-3409-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABQBZ-Hs2sbqvNzoMK_NNzhLV29bfUGZ3zfa0VMRZRoWC-tzDy_Zr3Pa9EEkcdEnvOy0XDj_UvepaT5P22XnNscJ_gyLKziXB.webp?r=4fb",
            color: "purple"
          },
          {
            title: 6,
            key: 6,
            movie:
              "https://occ-0-3409-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABSO0Uahpb8-OKaMrCJ0ByzZjl0smJiIGc3nPCNtQWaV3H29fjwy0IfQ-tAzdpz73Yp6nJ0ivR4t2ngSF8SWtXHz_kDTBKoPA.webp?r=4de",
            color: "red"
          }
          // {
          //   title: 7,
          //   key: 7,
          //   movie:
          //     "https://occ-0-3409-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXdkA5mmI9OxER465PCbCmRFVdyxGl3TclzKgZm_6Pn7hyVsy1FvAPtsbPMsoKZ5H56EPsnFZlqmEdXf_rmz98fEvQ6WZhxE.jpg?r=e7b",
          //   color: "black"
          // },
          // {
          //   title: 8,
          //   key: 8,
          //   movie:
          //     "https://occ-0-3409-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABdUHnWCCn29uk30cE_YipZxY2DU-KsJGJ1PvWpULKDHL0MMdpnlzo-iFlJc-FRGfrwyxLcvNC7YOZGYTtwK8zNRpJ-7_2Wx7.jpg?r=de9",
          //   color: "white"
          // },
          // {
          //   title: 9,
          //   key: 9,
          //   movie:
          //     "https://occ-0-3409-300.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABf23LNHN5pkUwKm4Y-HVwnHmqlWBZY07m909lmJ81gd6ZRYoD4klGGXpl6oobb0UXQDt2PGKsyDou17mhin13jEPdkXoAIFWj4rNV_JhgksC6QHFr5TNZRwsckIU.jpg?r=978",
          //   color: "cyan"
          // },
          // {
          //   title: 10,
          //   key: 10,
          //   movie:
          //     "https://occ-0-3409-300.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABewXZBFgqhncFj1bH7-RYmdeq_nDlM_QxK01ZC6qMg8y45vtzrR2KC0jU_VSUZElYnqN6UMHacJZxAbvvujrwGlWQD6bjGFZEITX6bcopOZHMwVKaKq2aop_6Q3-.jpg?r=7f0",
          //   color: "#176dff"
          // },
          // {
          //   title: 11,
          //   key: 11,
          //   movie:
          //     "https://occ-0-3409-300.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABe7nQ-4uFaozqJT77LMhmej6PcaIPm3K_HNgPZD0b0n9dVz4E61H8cxiRxX6aGEZN7Srqimm1LTX1N7V-jMfCdEs-r3QaIlwqjbhsLY0XVu9V2MtzBDY7adyvXyk.jpg?r=680",
          //   color: "#135cdd"
          // },
          // {
          //   title: 12,
          //   key: 12,
          //   movie:
          //     "https://occ-0-3409-300.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTq_xlD7mWNAxPZhErXQ-yvHOtSLy_yZkzM4aGPfadUkBoouXmuxLz2VJaNEQzr9OALFighp_ZZNM72B-KuESfLbotDX1j_ejXcpGhfVQnZ0eWDUEM6cydtOJh70NmBy9Q.webp?r=3db",
          //   color: "#efefef"
          // },
          // {
          //   title: 13,
          //   key: 13,
          //   movie:
          //     "https://occ-0-3409-300.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWFE5iihqfc9JBHE0X-KSo581HCrf63U0rTcLj6IkY-HhG6qz7-rBVu1SiGNek1Y0CmbtSxOCu5wwymxgKr4g7IHuTS6pm1MT_zkXz88Os5gzyNzFX75fgpycpy-.jpg?r=0dc",
          //   color: "#e5fded"
          // }
        ]}
      />
      <div>
        <Carousel
          slides={[
            {
              title: 0,
              key: 0,
              movie:
                "https://occ-0-3409-778.1.nflxso.net/dnm/api/v6/CFXrEYtXxhcqF3ItF4DehdUbQjk/AAAABTbXec046_Bo2VaoFcNi1CcxbKqD8Os93SjZij9ZcmAZw5z1_TNmUsDtV5WMH9NbDVrfUIwLV8Y-tIzNCIsAvZKYjt8dY2H3f4yMKnACV3c2uOzX2mf-UTh_SqakyZlZlVmYiwOJnHqO3dddmqdocJ5b4ufQn88KbfN7kRywOhTQV9fHzHe6MjDOiUMTzxrhbiDxIPwQ.webp?r=56f",
              color: "red"
            },
            {
              title: 1,
              key: 1,
              movie:
                "https://occ-0-3409-778.1.nflxso.net/dnm/api/v6/CFXrEYtXxhcqF3ItF4DehdUbQjk/AAAABetCVAvvlifWtqW29zALdiS8A-H4OEfCh37pxgJCHz6oI186jdZkCJf4MnKrzagTNelfNpAMButAiLZlDObOcM0ZxsKFa1JxCdj15LdIfHFjgLraKnMTyUPBhRdeLPlgUxHw_yPmgGmM5iuM0Qmr4Cyipxshdz0gyHs-PPBsapqrOmHi7JSTa3zmhsFiSGKFKQ2vhVd8.webp?r=03b",
              color: "green"
            },
            {
              title: 2,
              key: 2,
              movie:
                "https://occ-0-3409-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABQTuEMRqug-Pb0-w5xE3z0gFDSOpKVcVWNu-qwqwa0TfN0zffHhr2b2NBZdnK8t3EEI8M7ESi4dBQ1SWBVADjNFzAQ_8TiyH.webp?r=72f",
              color: "yellow"
            },
            {
              title: 3,
              key: 3,
              movie:
                "https://occ-0-3409-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYHPj_fHm-MQx-fxFppjfWz8UJY0WwurrKOoV2Q4GJ2oKYWgaqZoVb-HxDyXdX0eJU81Xv2CS_KeLsdpG2wENCvbPEQRPT50MpeCJjKbJIYEtTlKgVY3L8SzCy5BbYYwXg.jpg?r=6b9",
              color: "blue"
            },
            {
              title: 4,
              key: 4,
              movie:
                "https://occ-0-3409-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTHSLjT6Oqkl4TS2OSEuBhIfW6xB5-pyEOlIzoeNtuL_OLB_32ogRbGlNMKQ-y6kbzm6_QiMl7_h3kqQgBlo6UWkrWJ33G0s.jpg?r=854",
              color: "orange"
            },
            {
              title: 5,
              key: 5,
              movie:
                "https://occ-0-3409-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABQBZ-Hs2sbqvNzoMK_NNzhLV29bfUGZ3zfa0VMRZRoWC-tzDy_Zr3Pa9EEkcdEnvOy0XDj_UvepaT5P22XnNscJ_gyLKziXB.webp?r=4fb",
              color: "purple"
            },
            {
              title: 6,
              key: 6,
              movie:
                "https://occ-0-3409-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABSO0Uahpb8-OKaMrCJ0ByzZjl0smJiIGc3nPCNtQWaV3H29fjwy0IfQ-tAzdpz73Yp6nJ0ivR4t2ngSF8SWtXHz_kDTBKoPA.webp?r=4de",
              color: "red"
            }
          ]}
        />
      </div>
    </div>
  );
}

export default App;
