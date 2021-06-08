import { ElLoading } from "element-plus";

let loading = null;
export const showLoading = () => {
  loading = ElLoading.service({
    lock: true,
    text: "加载中……",
    background: 'rgba(0, 0, 0, 0.5)'
  });
};
export function hideLoading() {
   setTimeout(() => {
    loading.close();   
   });
}
