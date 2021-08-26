/*!
 * author: teamwei
 * date: 2021-08-20
 */

import { useRouter } from "vue-router";
import { state } from "vcat-history";

export default function (): { backHome: (homePage?: string) => void } {
    const router = useRouter();

    // 返回首页
    const backHome = (homePage = "/") => {
        // 计算退回首所需要的步数(根据历史页面数)
        const n = state.historyPages.length - 1;
        if (n > 0) {
            router.go(-n);
        } else {
            router.replace(homePage);
        }
    };

    return {
        backHome,
    };
}
